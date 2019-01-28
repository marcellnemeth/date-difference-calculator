package hu.date.calculator.service;

import hu.date.calculator.model.CustomDate;
import hu.date.calculator.util.ServiceHelper;
import org.springframework.stereotype.Service;

import java.util.regex.Pattern;

@Service
public class CalculatorServiceImpl implements CalculatorService {

    @Override
    public int calculateDifference(String date1, String date2) {

        ServiceHelper.validateArguments(date1, date2);

        String[] parts = date1.split(Pattern.quote("."));

        int year = Integer.parseInt(parts[0]);
        int month = Integer.parseInt(parts[1]);
        int day = Integer.parseInt(parts[2]);

        CustomDate customDate1 = new CustomDate(year, month, day);
        parts = date2.split(Pattern.quote("."));
        year = Integer.parseInt(parts[0]);
        month = Integer.parseInt(parts[1]);
        day = Integer.parseInt(parts[2]);


        CustomDate customDate2 = new CustomDate(year, month, day);

        return customDate1.subtractDates(customDate2);
    }
}
