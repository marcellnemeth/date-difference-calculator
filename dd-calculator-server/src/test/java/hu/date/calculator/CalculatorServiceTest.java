package hu.date.calculator;

import hu.date.calculator.service.CalculatorService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CalculatorServiceTest {

    @Autowired
    CalculatorService calculatorService;

    @Test
    public void calculateDifferenceTest(){
        int expected = 50830;

        int actual = calculatorService.calculateDifference("2015.03.22","1876.01.20");

        assertEquals(expected,actual);

        try {
            calculatorService.calculateDifference("2015.03.22", "187.dds01.20");
        }catch (Exception e){
            assertTrue(e instanceof IllegalArgumentException);
        }


    }

}
