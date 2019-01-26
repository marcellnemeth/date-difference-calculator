package hu.date.calculator;

import java.util.HashMap;

public class CustomDate {
    private int year;
    private int month;
    private int day;

    public CustomDate(int year, int month, int day){
        this.year = year;
        this.month = month;
        this.day = day;
    }

    public static int subtractDates(CustomDate date1, CustomDate date2){
        int daysAndMonthsInDays = (getDaysByMonth(date1.year,date1.month)+date1.day)
                - (getDaysByMonth(date2.year,date2.month)+date2.day);
        int yearDiffInDays = getDayDifferenceFromYears(date1.year,date2.year);

        return daysAndMonthsInDays + yearDiffInDays;
    }

    private static boolean isLeapYear(int year) {
        return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
    }

    private static int getDayDifferenceFromYears(int year1, int year2){
        int days=0;
        if(year1 >= year2) {
            for (int i = year2; i < year1; i++) {
                if (isLeapYear(i)) {
                    days += 366;
                } else {
                    days += 365;
                }
            }
        }else {
            for (int i = year1; i < year2; i++) {
                if (isLeapYear(i)) {
                    days -= 366;
                } else {
                    days -= 365;
                }
            }
        }
        return days;
    }
    private static int getDaysByMonth(int year, int month){
        int days = 0;
        HashMap<Integer,Integer> months = new HashMap<>();
        months.put(1,31);
        if(isLeapYear(year)){
            months.put(2,29);
        }else {
            months.put(2, 28);
        }
        months.put(3,31);
        months.put(4,30);
        months.put(5,31);
        months.put(6,30);
        months.put(7,31);
        months.put(8,31);
        months.put(9,30);
        months.put(10,31);
        months.put(11,30);
        months.put(12,31);

        for(int i = 1; i < month; i++ ){
            days+=months.get(i);
        }

        return days;
    }

    public int getYear() {
        return year;
    }

    public int getMonth() {
        return month;
    }

    public int getDay() {
        return day;
    }

}
