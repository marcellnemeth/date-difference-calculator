package hu.date.calculator.model;

import hu.date.calculator.util.DateHelper;

public class CustomDate {
    private int year;
    private int month;
    private int day;

    public CustomDate(int year, int month, int day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    public int subtractDates(CustomDate date) {
        int daysAndMonthsInDays = (DateHelper.getDaysByMonth(this.year, this.month) + this.day)
                - (DateHelper.getDaysByMonth(date.year, date.month) + date.day);
        int yearDiffInDays = DateHelper.getDayDifferenceFromYears(this.year, date.year);

        return daysAndMonthsInDays + yearDiffInDays;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }
}
