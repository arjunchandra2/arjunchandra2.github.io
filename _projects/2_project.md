---
layout: page
title: Multi-Agent Multi-Armed Bandits
description: An empirical study of fair algorithms in the MA-MAB setting from NeurIPS 2021
img: assets/img/592_cover.png  # Replace with a relevant image or remove this line
importance: 2
category: fun
---

#### Overview
---

<div class="row mt-4">
  <div class="col-12">
    <p>
      The standard multi-armed bandit (MAB) problem models a single agent choosing actions to maximize its reward over time. However, in many real-world scenarios, actions affect <strong>multiple agents</strong>—raising questions of <em>fairness</em> in decision making. For example, a city planning a new transportation policy must consider how different options impact all residents.
    </p>
    <p>
      This project explores algorithms for <strong>fairness in the multi-agent MAB setting (MA-MAB)</strong>, as formalized by Hossain et al. (NeurIPS 2021). We provide an empirical analysis of the proposed algorithms and evaluate their performance across different fairness and utility trade-offs.
    </p>
  </div>
</div>


#### What is the MA-MAB Problem?
---

The multi-agent MAB problem generalizes the standard bandit setting by introducing a population of agents. Each round, a central decision-maker selects one arm, and every agent receives a stochastic reward from that choice. The goal is to learn a policy over the arms that maximizes the fairness across agents. Fairness is quantified in the setting using the Nash Social Welfare. 


#### Algorithms Studied
---

We evaluate several classic MAB algorithms adapted to this setting in Hossain et al.:

- **Explore Then Commit** – allocates an initial exploration phase to fairly estimate rewards before committing to a policy
- **Epsilon Greedy** – selects arms by mostly exploiting the best option while occasionally exploring randomly
- **UCB** – choosing arms with the highest confidence bounds 

For each, we provide a proof sketch of the main regret bounds from Hossain et al., validate the regret bounds empirically, and analyze the policy trajectory during rollouts.

#### Key Results
---

Our findings show:

- As expected, all regret bounds from Hossain et al. hold.
- In practice, UCB tends to perform much better than its regret bound guarantee. 
- Epsilon greedy can reach the optimal policy and then deviate away from it, whereas UCB does not suffer from this behavior. 

<div class="row justify-content-center">
  <div class="col-12 mt-3">
    {% include figure.liquid path="assets/img/eg.png" title="Epsilon-Greedy" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption text-left mt-2" style="max-width: 100%; font-size: 0.95rem;">
  <strong>Figure:</strong> Epsilon-Greedy analysis. <strong>Left:</strong> Expected Regret vs. Horizon. <strong>Right:</strong> Nash Social Welfare with <em>μ*</em>, the optimal <em>p*</em>, and example policy trajectories for <em>T=10<sup>4</sup></em>.
</div>

#### More Details
---

The full write-up can be found [here](/assets/pdf/ds592_report.pdf) and the implementation is available [here](https://github.com/arjunchandra2/DS592-Final-Project).



