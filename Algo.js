def sum_of_distinct_elements(set1, set2):
    distinct_elements = []
    
    for element in set1:
        if element not in distinct_elements:
            distinct_elements.append(element)
    
    for element in set2:
        if element not in distinct_elements:
            distinct_elements.append(element)
    
    return sum(distinct_elements)


# Example usage:
set1 = [3, 1, 7, 9]
set2 = [2, 4, 1, 9, 3]
result = sum_of_distinct_elements(set1, set2)
print(result)  # Output: 13
