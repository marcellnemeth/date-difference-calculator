package hu.date.calculator.util;

import java.util.HashMap;
import java.util.Map;

public class DateHelper {
    private static final int DAYS_IN_YEAR = 365;


    private DateHelper() {
    }

    public static boolean isLeapYear(int year) {
        return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
    }

    public static int getDifferenceInDaysByYears(int year1, int year2) {
        int days = 0;
        if (year1 >= year2) {
            for (int i = year2; i < year1; i++) {
                days += (isLeapYear(i)) ? DAYS_IN_YEAR + 1 : DAYS_IN_YEAR;
            }
        } else {
            for (int i = year1; i < year2; i++) {
                days -= (isLeapYear(i)) ? DAYS_IN_YEAR + 1 : DAYS_IN_YEAR;
            }
        }
        return days;
    }

    public static int getNumberOfDaysByMonth(int year, int month) {
        int days = 0;
        Map<Integer, Integer> months = new HashMap<>();
        months.put(1, 31);
        if (isLeapYear(year)) {
            months.put(2, 29);
        } else {
            months.put(2, 28);
        }
        months.put(3, 31);
        months.put(4, 30);
        months.put(5, 31);
        months.put(6, 30);
        months.put(7, 31);
        months.put(8, 31);
        months.put(9, 30);
        months.put(10, 31);
        months.put(11, 30);
        months.put(12, 31);

        for (int i = 1; i < month; i++) {
            days += months.get(i);
        }

        return days;
    }
}
