// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
public class SplitString
{
  public static string[] Solution(string str)
  {
    if(str.Length%2!=0)
    {
      str+="_";
    }
    string[] res = new string[str.Length/2];
    for(int i = 0;i<str.Length;i+=2)
    {
      res[i/2] = str.Substring(i,2);
    }
    return res;
  }
}