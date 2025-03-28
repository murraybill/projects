public class OpenAreaRule implements NavigationRule {

    OpenAreaResult openAreaResult;

    @Override
    public boolean evaluate(Expression expression) {
        boolean evalResult = false;
        if(expression.expressionType.equals(ExpressionType.SUBDOMAIN)) {
            SubdomainExpression subdomainExpression = (SubdomainExpression) expression;
            if(subdomainExpression.subdomain.equals("www")) {
                evalResult = true;
                this.openAreaResult = new OpenAreaResult();
                openAreaResult.isOpenArea = true;

            }
        }
        return evalResult;
    }

    @Override
    public OpenAreaResult getResult() {
        return openAreaResult;
    }


}
