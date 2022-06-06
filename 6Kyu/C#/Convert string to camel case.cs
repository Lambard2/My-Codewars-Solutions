//https://www.codewars.com/kata/517abf86da9663f1d2000003
using System;
using System.Text.RegularExpressions;

public class Kata
{
  public static string ToCamelCase(string str)
  {
    string[] substrings = Regex.Split(str, @"[^A-Za-z]");
    string res = "";
    res+=substrings[0];
    for(int i = 1;i<substrings.Length;i++)
    {
      res+=char.ToUpper(substrings[i][0]) + substrings[i].Substring(1);
    }
    return res;
  }
}