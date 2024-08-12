import pickle
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# Load the data
with open("data.pickle", "rb") as f:
    data_dict = pickle.load(f)

# Inspect the data
print("Keys in data dictionary:", data_dict.keys())
print("Number of samples:", len(data_dict["data"]))
print("Sample data type:", type(data_dict["data"][0]))
print("Length of first sample:", len(data_dict["data"][0]))

# Define the expected length of the feature vectors
expected_length = 42  # Replace with the expected feature length


# Process the data to ensure consistent shape
def preprocess_data(data, expected_length):
    processed_data = []
    for sample in data:
        array_sample = np.array(sample)
        if array_sample.size < expected_length:
            # Pad the sample if it's shorter than expected_length
            padded_sample = np.pad(
                array_sample, (0, expected_length - array_sample.size), mode="constant"
            )
        else:
            # Truncate the sample if it's longer than expected_length
            padded_sample = array_sample[:expected_length]
        processed_data.append(padded_sample)
    return np.array(processed_data)


data = preprocess_data(data_dict["data"], expected_length)
labels = np.array(data_dict["labels"])

# Check the shapes to ensure consistency
print("Data shape:", data.shape)
print("Labels shape:", labels.shape)

# Split the data
x_train, x_test, y_train, y_test = train_test_split(
    data, labels, test_size=0.2, shuffle=True, stratify=labels
)

# Train the model
model = RandomForestClassifier()
model.fit(x_train, y_train)

# Save the model
with open("model.p", "wb") as f:
    pickle.dump({"model": model}, f)

print("Model training complete and saved as 'model.p'")
