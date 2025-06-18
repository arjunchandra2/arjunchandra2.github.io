---
layout: page
title: Intelligent Waste Detection for Sustainability
description: A machine learning system for identifying contamination and improving recycling at scale
category: fun
img: assets/img/549_cover.png 
importance: 4
---

#### Overview
---

**Spare-it** is a Boston based startup that helps businesses, universities, and office spaces track and reduce workspace waste—from general trash to recycling, electronics, water, energy, and travel. Their mission is to drive sustainability through **awareness, engagement, and actionable insights**.

This project supports Spare-it’s mission by developing a machine learning system that identifies **waste contamination** and uncovers **missed recycling opportunities**. Using real-time data and computer vision, the system provides organizations with tools to improve waste management practices and encourage behavior change.

#### Project Objectives
---

Our goals were to:
- Predict contamination events in recycling streams
- Detect incorrectly sorted waste using image classification
- Analyze historical trends to identify key areas for waste reduction
- Deploy a model that integrates into Spare-it’s platform for real-time feedback

#### Technical Approach
---

We divided our pipeline into several core components:

- **Image Collection & Preprocessing**  
  Waste stream imagery was gathered from smart bins and edge devices. Images were cleaned, labeled, and preprocessed for model training.

- **Model Training & Evaluation**  
  We used object detection and segmentation techniques (i.e, YOLO) to distinguish between recyclable and non-recyclable items, and detect contamination.

- **Deployment & Integration**  
  The trained model was deployed to Hugging Face and made publicly available. 

#### Key Outcomes
---

- Achieved high accuracy on contamination detection across diverse workspace environments
- Demonstrated reduction in contamination rates after system deployment
- Enabled real-time dashboard updates for awareness and accountability
- Supported Spare-it’s broader mission with a replicable ML pipeline

#### More Details
---

The full technical overview and results are available [here](/assets/pdf/549_poster.pdf). The Hugging Face demo is [here](https://huggingface.co/spaces/hengc/Spare-it_fall24) and code can be found [here](https://github.com/BU-Spark/ml-spare-it-contamination). This project was completed as part of BU Spark! in collaboration with Devon Solheim, Heng Chang, and Tia Hannah from Boston University as well as the Spare-it team.

