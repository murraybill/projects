public interface NavigationRule {

    boolean evaluate(Expression expression);

    OpenAreaResult getResult();

}
