class MaximumNestingDepthOfTheParentheses {
    public int maxDepth(String s) {
        int curCount =0, maxCount=0;
        for(int i=0;i<s.length();i++){
            char ch=s.charAt(i);
            if(ch=='('){
                curCount++;
                maxCount = Math.max(maxCount,curCount);
            }
            else if(ch==')'){
                curCount--;
            }
        }
        return maxCount;
    }
}