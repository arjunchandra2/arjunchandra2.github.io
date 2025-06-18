---
layout: page
title: Pokémon Reinforcement Learning
description: Training an agent to play a simplified Pokémon game using reinforcement learning
category: fun
importance: 5
img: assets/img/pokemon_rl.png
---

#### Overview
---

This project explores the use of **reinforcement learning (RL)** to train an agent to play a simplified version of Pokémon. Specifically, we implement Q-learning in a simulated environment to train the agent. The agent currently uses an **epsilon-greedy** policy for exploration, balancing between exploiting known strategies and exploring new ones. Future extensions could include more advanced exploration techniques such as **Thompson Sampling** to improve learning efficiency.


#### Environment Design
---

The environment simulates a simplified Pokémon-style battle. Both the **agent** and the **opponent** begin with **20 hit points (HP)**, which cannot exceed this amount during the game (even after healing).

At each turn, the **agent** can choose one of the following three actions:

- **Attack** – Deal **1 to 5 HP** of damage to the opponent, sampled uniformly at random  
- **Heal** – Restore **1 to 5 HP** of its own health, sampled uniformly at random  
- **Mesmerize** – With **20% probability**, render the opponent unable to act until they are attacked by the agent

The **opponent's policy** is designed to approximate optimal behavior and operates as follows:

- The opponent attacks if either:
  - The opponent's HP is **above 5**
  - The agent's HP is **below 4** 
- Otherwise, the opponent **Heals**

The opponent does **not** have access to the **Mesmerize** move. When attacking or healing, it follows the same uniform random probabilities (1–5 HP) as the agent.

#### Agent Design
---

The RL agent uses:
- **Q-learning** as the primary training algorithm
- **Epsilon-greedy exploration** with decay to shift toward exploitation
- A simple tabular state-action representation

There is no guarantee that the agent has explored all the states during learning, even with epsilon greedy exploration. For example, see the plot below of the state space after Q-learning using (agent_hp, opponent_hp, opponent_mesmerized) as the axes. All of the holes in the grid correspond to unexplored states. 

<div class="row justify-content-center">
  <div class="col-4 mt-3">
    {% include figure.liquid path="assets/img/pokemon_rl_sp.png" title="State space coverage after training" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption text-left mt-2" style="max-width: 100%; font-size: 0.95rem;">
  <strong>Figure:</strong> Coverage of the state space after training. White holes in the grid indicate states never visited during training.
</div>

To address this, if the agent finds itself in an unexplored state during the course of the game, we will play the best move in the nearest explored state using Euclidean distance in the (agent_hp, opponent_hp, opponent_mesmerized) state space. This works well since the idea that the agent will act the same in similar states (i.e. similar agent_hp, opponent_hp, opponent_mesmerized) is likely a reasonable assumption.

#### Results & Insights
---

- The agent learns to prioritize healing when low on HP
- The agent's win rate jumps from 41% to 76% when the mesemerize probability is increased from 20% to 80%. 
- Certain strategies emerge from the agent's learning phase. For example, when the agent is low on HP, it tends to try to mesmerize the user and spend several turns healing instead of attacking, much like a human player would. 


#### More Details
---

You can view the source code and play against the agent [here](https://github.com/arjunchandra2/Pokemon_RL).
