package hu.date.calculator.controller;

import hu.date.calculator.service.CalculatorService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class CalculatorController {

    Logger logger = LoggerFactory.getLogger(CalculatorController.class);

    @Autowired
    CalculatorService calculatorService;

    @GetMapping("/{date1}-{date2}")
    public int getDays(@PathVariable("date1") String date1, @PathVariable("date2") String date2) {

        return calculatorService.calculateDifference(date1, date2);
    }
}
