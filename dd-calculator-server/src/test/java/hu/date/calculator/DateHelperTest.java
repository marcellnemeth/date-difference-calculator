package hu.date.calculator;

import hu.date.calculator.util.DateHelper;
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
public class DateHelperTest {

    @Test
    public void isLeapYearTest(){
        int expected = 2000;

        assertTrue(DateHelper.isLeapYear(expected));
    }
    @Test
    public void getDifferenceInDaysByYearsTest(){
        LocalDate date = LocalDate.of(2000,01,01);
        LocalDate date2 = LocalDate.of(2010,01,01);

        int expected = Math.abs((int) ChronoUnit.DAYS.between(date, date2));
        int actual = Math.abs(DateHelper.getDifferenceInDaysByYears(2000,2010));

        assertEquals(expected, actual);

    }

    @Test
    public void getNumberOfDaysByMonthTest(){
        int expected = 31 + 28;

        int actual = DateHelper.getNumberOfDaysByMonth(2019,3);

        assertEquals(expected,actual);
    }
}
