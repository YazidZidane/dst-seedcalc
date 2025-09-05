import matplotlib.pyplot as plt
import numpy as np
import os

def generate_plot():
    """Generates a simple plot and saves it as a PNG file."""
    # Create a directory to store the graphs if it doesn't exist
    if not os.path.exists('graphs'):
        os.makedirs('graphs')

    # Data for the plot
    x = np.linspace(0, 20, 100)
    y = np.sin(x)

    # Create the plot
    plt.figure(figsize=(8, 6))
    plt.plot(x, y)
    plt.title("A Simple Sine Wave Plot")
    plt.xlabel("X-axis")
    plt.ylabel("Y-axis")
    plt.grid(True)

    # Save the plot to the 'graphs' directory
    plot_filename = os.path.join('graphs', 'sine_wave_plot.png')
    plt.savefig(plot_filename)
    print(f"Generated plot saved to: {plot_filename}")

if __name__ == "__main__":
    generate_plot()
