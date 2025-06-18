---
layout: page
title: Lattice-Based Post-Quantum Cryptography
description: A study of LWE-based cryptosystems and their role in building quantum-safe encryption
category: fun
img: assets/img/536_cover.png  # Replace with a relevant image or remove this line
importance: 3
---

#### Overview
---

Quantum computers, once a theoretical concept, are rapidly becoming a practical reality—posing a serious threat to modern cryptographic systems. Classical public-key schemes such as RSA rely on problems that quantum algorithms like Shor’s can efficiently solve.

In response, researchers have proposed **post-quantum cryptographic protocols**, with **lattice-based cryptography** emerging as one of the most promising and well-studied candidates.

This project explores the foundations and recent developments in lattice-based protocols, focusing on their quantum resistance and practical viability.

#### From Lattices to Learning With Errors (LWE)
---

We begin by introducing basic lattice theory and the **Learning With Errors (LWE)** problem—a hard computational problem that forms the backbone of many lattice-based schemes.

- LWE is the task of solving a system of noisy linear equations 
- LWE is provably as hard as worst-case lattice problems like GapSVP and SIVP.
- The LWE hardness assumption is conjectured to remain secure even against quantum computers.

#### Applications: Key Encapsulation & Encryption
---

The hardness of LWE has enabled the construction of secure **key encapsulation mechanisms (KEMs)** and public-key encryption systems. The full write-up waks through:

- A simple LWE-based encryption scheme
- Extensions of LWE that are useful in practice
- Practical considerations for side-channel attacks

#### More Details
---

The full write-up is available [here](/assets/pdf/py536_report.pdf).

