class Solution(object):
    def uniquePaths(self, m, n):
        """
        :type m: int
        :type n: int
        :rtype: int
        """
        dp=[[-1 for _ in range(n+1)] for _ in range(m+1)]
        def f(i,j):
            if i==0 and j==0:
                dp[i][j]=1
                return dp[i][j]

            if i<0 or j<0:
                return 0

            if dp[i][j]!=-1:
                return dp[i][j]    

            right = f(i-1,j)
            down = f(i,j-1)
            dp[i][j] = right+down
            return dp[i][j]

        return f(m-1,n-1)