public class Main {
    public static void main(String[] args) {



        NavigationRuleEngine navigationRuleEngine = new NavigationRuleEngine();
        SubdomainExpression subdomainExpression = new SubdomainExpression();
        subdomainExpression.expressionType = ExpressionType.SUBDOMAIN;
        subdomainExpression.subdomain="kunden";
        OpenAreaResult result = navigationRuleEngine.process(subdomainExpression);
    }
}