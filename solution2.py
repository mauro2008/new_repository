def palindroma(p):
    p1 = p[::-1]
    if p == p1:
      print("the word is palindrome")
    else:
      print("the word is not palindrome")
print(palindroma("mauro"))
palindroma("ojo")

#the user enters the word by parameter
def palindroma(p = input("please enter a word to check if it is palindromic or not\n")):
    p1 = p[::-1]
    if p == p1:
      print(f"the word {p} is palindrome")
    else:
      print(f"the word {p} is not palindrome")
palindroma()

# def palindroma(p = [input("please enter a word to check if it is palindromic or not\n")]):
#   for i in p:
#         p1 = p[::-1]
#         vector = vector + i
#         if p == p1:
#           print(f"the word {vector} is palindrome")
#         else:
#           print(f"the word {vector} is not palindrome")
# palindroma()
# def palindroma(p = str(input("please enter a word to check if it is palindromic or not\n"))):
#     p1 = [None]*(p+1)
#     for i in range(p,1,-1):
#         p1[i] = str(len(p)) 
    
#         print(p1[1:p+1])
# palindroma()

# import numpy as np
# p = []
# vector = np.array(["mauro"])
# for i in vector:
#   p = [p+i]
#   print(p.astype(str))
vect = []
def palindroma(vect):
    p = input("please enter a word to check if it is palindromic or not\n")
    for i in p:
        vect = vect + [i]
        p1 = p[::-1]
    if p == p1:
        print(f"""the word {[p]} is palindrome and 
        here are the vectors of each word{vect}""")
    else:
        print(f"""the word {[p]} is not palindrome and 
        here are the vectors of each word{vect}""")
        return f"{vect}"
    print(vect) 
palindroma(vect)

print(palindroma(vect))