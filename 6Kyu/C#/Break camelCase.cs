//www.codewars.com/kata/5208f99aee097e6552000148/
using System;
using System.Globalization;
public class Kata
{
  public static string BreakCamelCase(string str)
  {
    string res = "";
    char[] arr = str.ToCharArray();
    foreach(char c in arr)
    {
      if(c==Char.ToUpper(c))
      {
        res+=" ";
      }
      res+=c;
    }
    return res;
  }
}