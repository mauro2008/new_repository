
# Python vectors solution question 2 
# creating the vectors function
# def vectors():
#     n = [9, 7, 5, 3, 1]
#     m = [10, 8, 6, 4, 2]
    # prstring original vector 
    # print ("The vector x is: " + str(n))
    # print ("The vector w is: " + str(m))
    # using naive method 
    # to combine two sorted vectors
    # vector_x = len(n)
#     vector_w = len(m)
#     z = []
#     i, j = 0, 0
#     while i < vector_x and j < vector_w:
#         if n[i] < m[j]:
#           z.append(n[i])
#           i += 1
#         else:
#           z.append(m[j])
#           j += 1
#     z = z + n[i:] + m[j:]
#     #the numbers of the vectors are ordered with the method: sort
#     z.sort()
#     # display combination of vectors on screen
#     print(f"The combined of vectors is: {str(z)}")
# vectors()

# #another less complex form
# # using sorted() 
# def vectors():
#     n = [9, 7, 5, 3, 1]
#     m = [10, 8, 6, 4, 2]
#     # prstring original vectors 
#     print("The vector x is: " + str(n))
#     print("The vector w is: " + str(m))
#     # using sorted()
#     # to combine two sorted vectors
#     z = sorted(n + m)
#     print(f"The combined of vectors is: {str(z)}")
# vectors()


# def vectors():
#     n = [9, 7, 5, 3, 1] 
#     m = [10, 8, 6, 4, 2]
#     z = sorted(n + m)
#     # return z
#     print(f"The combined of vectors is l: {str(z)}")
# vectors()
# num1 = []
# print("por favor ingrese los numeros: \n",end="")

# num = list(map(int,input().split()))
# for i in num:
#     num1 += [i]
# num2 = tuple(num1)
# # num2 = reverse(num)
# # print(num) 
# print(type(num1), num, type(num2), num2)
# print(num2)

var = lambda num1, num2: num1 + num2


print(var(5,9))