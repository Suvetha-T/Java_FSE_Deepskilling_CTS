public class FinancialForecasting {
     public static double Value(double amount, double rate, int years) {

        if (years == 0) {
            return amount;
        }
        return Value(amount, rate, years - 1) * (1 + rate);
    }

    public static void main(String[] args) {
        double initialAmount = 1000;
        double growthOfRate = 0.05;
        int investment = 5;
        double result = Value(initialAmount, growthOfRate, investment);
        System.out.printf("$%.2f is invested at the rate %.1f%% for %d years which grows upto $%.2f",
                initialAmount, growthOfRate*100, investment, result);
    }
}
