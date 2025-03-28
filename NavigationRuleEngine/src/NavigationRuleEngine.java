import java.util.ArrayList;
import java.util.List;

public class NavigationRuleEngine {

    private static List<NavigationRule> rules = new ArrayList<>();

    static {
        rules.add(new OpenAreaRule());
    }

    public OpenAreaResult process(Expression expression) {
        NavigationRule rule = rules
                .stream()
                .filter(r -> r.evaluate(expression))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Expression does not matches any Rule"));
        return rule.getResult();
    }
}
