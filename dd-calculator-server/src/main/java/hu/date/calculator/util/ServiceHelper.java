package hu.date.calculator.util;

public class ServiceHelper {

    private ServiceHelper() {

    }

    public static void validateArguments(String arg1, String arg2) {

        if (!arg1.matches("^\\d{4}[\\.](0?[1-9]|1[0-2])[\\.](0?[1-9]|[12]\\d|3[01])$")
                || !arg2.matches("^\\d{4}[\\.](0?[1-9]|1[0-2])[\\.](0?[1-9]|[12]\\d|3[01])$")) {
            throw new IllegalArgumentException("At least one of the provided dates are not correct");
        }
    }
}
