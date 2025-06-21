class Logger {
    private static Logger instance;

    private Logger() {
        System.out.println("Logger is created");
    }

    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    public void log(String text) {
        System.out.println("LOG: " + text);
    }

    public void error(String text) {
        System.out.println("LOG: " + text);
    }
}
public class SingletonPatternExample {
    public static void main(String[] args) {
        Logger log1 = Logger.getInstance();
        log1.log("1st log message");

        Logger log2 = Logger.getInstance();
        log2.error("Oops! An error occurred");

        System.out.println("Does both the references point to the same instance: "+ (log1 == log2) );
    }
}
