#n=int(input())
# if n%4==0 or n%100==0:
#     print("YES its a leap year")
# else:
#     print("NOt a leap year")

# if n>=90:
#     print("A")
# elif n<90 and n>=80:
#     print("B")
# else:
#     print("C")

# i=2
# c=0
# while i<=n/2:
#     if n%i==0:
#         c=c+1
#     i+=1
# if c==0:
#     print("prime")
# else:
#     print("not prime")

# n=int(input())
# c=0
# for i in range(101):
#     if i%2==0:
#         c=c+i
# print(c)


# s=1
# n=list(map(int,input().split(' ')))
# for i in range(len(n)):
#     if n[i]>0:
#         s=s* n[i]
# print(s)


# n=list(input().split(','))
# for fruit in n:
#     s=fruit[::-1]
#     print(s)

# n=input()
# if n=="a" or n=="e" or n=="i" or n=="o" or n=="u":
#     print("Its a vowel")
# else:
#     print("its a consonant")


# n=input()
# a=n[::-1]
# if a==n:
#     print("palindrome")
# else:
#     print("not")


# n=int(input())

# s=1
# for i in range(1,n+1):
#    s=s*i
    
# print(s)


# #Define a tuple containing the names of three programming languages. Print each language name along with its length.
# a=tuple(map(str,input().split(" ")))
# for i in range(len(a)):
#     b=len(a[i])
#     print(a[i],b) 


# #Create a Python function that checks if two sets are disjoint (i.e., have no common elements).

# a=set(map(str,input().split()))
# b=set(map(str,input().split()))
# c=0
# for i in b:
#     if i in a:
#         c=c+1
# if c==0:
#     print("no common element")
# else:
#     print("have common")
    ############################################not completed***********


# #Find the union of two sets containing integers from 1 to 10 and 5 to 15.
# set1={1,2,3,4,5,6,7,8,9,10}
# set2={5,6,7,8,9,10,11,12,13,14,15}
# uni=set1.union(set2)
# print(uni)


#10 11 12

# #Write a function that takes a list of numbers and returns the maximum value.

    
# a=list(map(int,input().split()))

# def maxi(a):
#     max=0
#     for x in a:
#         if x>max:
#             max=x
#     return max
# print(maxi(a))
    

# # Create a list of squares of numbers from 1 to 10 using list comprehension.
# squares=[x**2 for x in range(1,11)]
# print(squares)


# # Write a Python function that takes a list as input and returns a new list containing only the unique elements (no duplicates).

# a=list(input().split())
# def unique(a):
#     mySet= set(a)
#     mylist =list(mySet)
#     return mylist
# print(unique(a))


# Define two variables and swap their values using tuple unpacking.

# myTuple=(1,2)
# a,b=myTuple
# a,b=b,a
# print(a,b)


# # Write a Python function that takes two sets as input and returns their intersection (common elements).

# a=set(map(str,input().split(",")))
# b=set(map(str,input().split(",")))
# c=a.intersection(b)
# print(c)


#Raise a custom exception when dividing by zero in a function. 

# try:
#     a=int(input())
#     b=int(input())
#     c=a/b
#     print(c)
# except(ZeroDivisionError):
#     print("ZeroDivisionError")


# # Create a Python program that reads an integer from the user. Handle any invalid input (e.g., non-integer values) by displaying an appropriate error message.

# try:
#     a=int(input())
#     print(a)
# except(ValueError):
#     print("please enter a valid value")


# # Create a Python function that divides two numbers. Handle the case when the denominator is zero by displaying an error message.

# def zero():
#     a=int(input())
#     b=int(input())
#     if b==0:
#         raise ZeroDivisionError   
#     return a/b
# print(zero())


# # Create a Python function that checks if two sets are disjoint (i.e., have no common elements).

# a=set(map(str,input().split()))
# b=set(map(str,input().split()))
# c=a.isdisjoint(b)
# print(c)


# # Define a tuple containing the names of three programming languages. Print each language name along with its length.

# a=tuple(map(str,input().split(",")))
# for x in a:
#     print(x,len(x))


# # Create a dictionary representing a book with keys for title, author, and publication year.

# a={
#     "komal": [90,89,99,98],
#     "ram": [89,87,99,95],
#     "seeta": [88,90,95,90]

# }
# print(a)


# # Write a Python program that takes data from an array containing student names and their scores. Calculate the average score for each student and store it in a dictionary.

# a=[
#    {"name":"komal", "score":[90,99,98,99]},
#    {"name":"ram", "score":[99,98,95,89]},
#    {"name":"seeta", "score":[98,89,80,78]}
# ]
# average={}
# for data in a:
#     Name=data["name"]
#     Score=data["score"]
#     avg=sum(Score)/len(Score)
#     average[Name]=avg

# for Name,avg in average.items():
#     print(f"{Name}:{avg}")



# # Read a text file and create a dictionary where keys are words, and values are their frequencies.

# s=""
# d={}

# import os
# if os.path.isfile("demo.txt"):
#     with open("demo.txt","r") as f:
#         content = f.read() 
#         lines = content.split(" ")
#         for i in lines:
#             if i not in s:
#                 a=lines.count(i)
#                 s+=i
#                 d[i]=a
# for key, value in d.items():
#     print(f"{key} : {value}")


# def abc(a,b):
#     for i in range(5):
#         print("hey")
#         if (a+b == 4):
#             print("great")
#     return a+b
# print(abc(2,2))

s=list(map(int,input().split()))
myset=set(s)
for i in range(len(s)):
    if 
