# There are a number of people who will be attending ACM-ICPC World Finals. Each of them may be well versed in a number of topics. Given a list of topics known by each attendee, presented as binary strings, determine the maximum number of topics a 2-person team can know. Each subject has a column in the binary string, and a '1' means the subject is known while '0' means it is not. Also determine the number of teams that know the maximum number of topics. Return an integer array with two elements. The first is the maximum number of topics known, and the second is the number of teams that know that number of topics.

# Example



# The attendee data is aligned for clarity below:

# 10101
# 11110
# 00010
# These are all possible teams that can be formed:

# Members Subjects
# (1,2)   [1,2,3,4,5]
# (1,3)   [1,3,4,5]
# (2,3)   [1,2,3,4]
# In this case, the first team will know all 5 subjects. They are the only team that can be created that knows that many subjects, so  is returned.

#--------------inefficient solution-----------------
def acmTeam(topic):
    n = len(topic)
    m = len(topic[0])
    maxt = 0
    result = []
    for f in range(n):
        for s in range(n):
            temp = []
            if f!=s:
                team = [f, s]
                for i in range(m):
                    if int(topic[f][i]) + int(topic[s][i]) >= 1:
                        temp.append(1)
                    else:
                        temp.append(0)
            else:
                continue            
            if sum(temp) > maxt:
                maxt = sum(temp)
                result =[]
                result.append(team)
            elif sum(temp) == maxt:
                result.append(team)
            print(maxt)
    uniq = int(len(result)/2)
    return [maxt, uniq]
