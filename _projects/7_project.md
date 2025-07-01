---
layout: page
title: Predicting a Linear Congruential Generator
description: Simulating the trajectory of a charged particle in an Electric field via Euler's method
category: fun
importance: 7
img: assets/img/340_cover.png
---

#### Overview
---

This project investigates whether neural networks can predict the outputs of **Linear Congruential Generators (LCGs)**—a classic family of pseudorandom number generators defined by the recurrence relation:  

$$
X_{n+1} = (a X_n + c) \mod m
$$

The parameters a, c, and m play a critical role in the quality of randomness. Some choices, like those in IBM’s infamous **RANDU**, lead to highly correlated outputs. Our goal was to explore whether neural networks can distinguish between well-parameterized LCGs and poorly behaving ones, and in doing so, provide insight into what makes certain generators more predictable.

#### Methodology
---

We began by implementing an LCG class with methods for seeding, resetting, generating values, and computing the period length (i.e., how long before the sequence repeats). This was crucial to ensure that training datasets didn’t wrap around, which could leak future targets into the input.

Our primary prediction task was next-value prediction based on the previous values in the sequence. The initial input consisted of the 10 numbers preceding the target, and we experimented with three architectures:

- A **vanilla neural network** with two hidden layers  
- A **recurrent neural network (RNN)**  
- A **long short-term memory network (LSTM)**  

Each model used 256 hidden units in the first layer, with the vanilla network adding a second layer of 512 units. All output layers used a linear activation function for regression, while hidden layers explored several options.

We also tested multiple variations:
- With and without input normalization  
- Using a **cosine activation** to explicitly model periodicity  
- Changing the input format to include only the previous number  

Throughout, we evaluated model performance using **mean absolute error (MAE)** on a validation set. For initial testing, we trained on a poor LCG known to produce correlated sequences, before moving on to the Java LCG.

#### Results & Insights
---

We found that: 

- All three architectures achieved around **500 MAE** on the poor LCG using normalized input, which is better than predicting the mean but still suboptimal.
- The **vanilla neural network learned much faster** than RNN and LSTM, plateauing after one epoch versus ~60 for the recurrent models. This suggests recurrent architectures struggled with the pseudorandom structure of the sequences.
- Removing normalization significantly improved performance. The vanilla network reached a **validation MAE of ~190** on the poor LCG, its best result. This shows the importance of input scaling, especially when targets are not normalized.
- Using a **cosine activation function** or reducing the input to only the previous number returned performance to ~500 MAE, showing these methods were less effective for the task.
- When applied to the **Java LCG**, even the best-performing model failed to learn—training loss and MAE fluctuated randomly. This underscores the robustness of better LCGs and highlights a stark contrast in predictability.

These results support the idea that **training loss curves can indicate the quality of LCG parameters**. Neural networks seem capable of detecting patterns in poor LCGs but fail completely on well-tuned generators. We also observed that despite some success, neural networks generally struggle to learn **modular arithmetic** and other nonlinear operations, suggesting a broader limitation and an opportunity for future research.

#### More Details
---

You can view the source code and more details [here](https://github.com/arjunchandra2/LCG-Prediction/).

