package hu.date.calculator.controller;

import hu.date.calculator.service.CalculatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class CalculatorController {

    @Autowired
    CalculatorService calculatorService;

    @GetMapping("/{date1}-{date2}")
    public int getDays(@PathVariable("date1") String date1, @PathVariable("date2") String date2) {

        return calculatorService.calculateDifference(date1, date2);
    }
}
