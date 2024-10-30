class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        row=len(board)
        col=len(board[0])
        if len(word)>row*col:
            return False
        count=Counter(sum(board,[]))
        for c,countWord in Counter(word).items():
            if count[c]<countWord:
                return False
        if count[word[0]] > count[word[-1]]:
            word=word[::-1]
        seen=set()
        def dfs(r,c,i):
            if i==len(word):
                return True
            if r<0 or c<0 or r>=row or c>=col or word[i]!=board[r][c] or (r,c) in seen:
                return False
            seen.add((r,c))
            res=(dfs(r+1,c,i+1) or dfs(r-1,c,i+1) or dfs(r,c+1,i+1) or dfs(r,c-1,i+1))
            seen.remove((r,c))
            return res
        for i in range(row):
            for j in range(col):
                if dfs(i,j,0):
                    return True
        return False 
        