# test_script.py
# A simple script to demonstrate the GitHub Actions workflow.

import numpy as np

# Create two NumPy arrays
array_a = np.array([1, 2, 3, 4, 5])
array_b = np.array([6, 7, 8, 9, 10])

# Perform element-wise multiplication
result = array_a * array_b

print("Hello from the GitHub Actions runner!")
print("Here are the results of a simple NumPy calculation:")
print(f"Array A: {array_a}")
print(f"Array B: {array_b}")
print(f"Result (A * B): {result}")
print("Script finished successfully.")
