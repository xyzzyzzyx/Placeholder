package tech.axiominfo;

import static org.apache.commons.lang3.StringUtils.wrapIfMissing;

import java.io.IOException;

import org.apache.tika.Tika;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.resource.NoResourceFoundException;

/**
 * Service application entrypoint with HTML5 single page app handling with base
 * href templateing.
 */
@Controller
@ControllerAdvice
@SpringBootApplication
public class ServiceApplication {

    @Value("${server.servlet.context-path:/}")
    private String contextPath;

    public static void main(String[] args) {
        SpringApplication.run(ServiceApplication.class, args);
    }

    @GetMapping("/")
    String index() {
        return "index";
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("Please select a file to upload");
        }

        try {
            Tika tika = new Tika();
            String detectedType = tika.detect(file.getInputStream());

            // Now you can use the detectedType
            System.out.println("file name: " + file.getOriginalFilename());
            System.out.println("file type: " + detectedType);

            return ResponseEntity.ok("File uploaded successfully: " + file.getOriginalFilename());

        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().body("Failed to process file: " + e.getMessage());
        }
    }

    @ModelAttribute
    private void addAttributes(Model model) {
        model.addAttribute("base", wrapIfMissing(contextPath, "/"));
    }

    @ExceptionHandler(NoResourceFoundException.class)
    private String handleException(final NoResourceFoundException e) {
        return "forward:/";
    }

    @Bean
    public Agent agent() {
        return new Agent("owl", "read owl");
    }

}
