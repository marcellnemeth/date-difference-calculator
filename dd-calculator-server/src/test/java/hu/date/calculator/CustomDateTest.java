package hu.date.calculator;

import hu.date.calculator.model.CustomDate;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CustomDateTest {


    @Test
    public void subtractDatesTest(){
        CustomDate firstDate = new CustomDate(2020,05,10);
        CustomDate secondDate = new CustomDate(2020,05,20);
        CustomDate thirdDate = new CustomDate(2040,02,20);
        CustomDate fourthDate = new CustomDate(1930,12,20);

        LocalDate firstLocalDate = LocalDate.of(thirdDate.getYear(),thirdDate.getMonth(),thirdDate.getDay());
        LocalDate secondLocalDate = LocalDate.of(fourthDate.getYear(),fourthDate.getMonth(),fourthDate.getDay());

        int actual = Math.abs(firstDate.subtractDates(secondDate));
        int expected = 10;
        assertEquals(expected,actual);

        actual = Math.abs(thirdDate.subtractDates(fourthDate));
        expected = Math.abs((int)ChronoUnit.DAYS.between(firstLocalDate, secondLocalDate));

        assertEquals(expected,actual);

    }
}
