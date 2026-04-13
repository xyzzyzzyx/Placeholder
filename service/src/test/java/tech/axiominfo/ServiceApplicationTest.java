package tech.axiominfo;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ServiceApplicationTest {

    @Test
    void contextLoads() {
        assertTrue(true, "Service context failed to load!");
    }

}
