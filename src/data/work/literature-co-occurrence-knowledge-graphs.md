---
title: Literature Co-Occurrence Knowledge Graphs
---

RENCI researchers have developed literature co-occurrence databases on COVID-19 based on the Semantic Scholar Open Research Dataset ([CORD 19](https://www.semanticscholar.org/cord19)), a set of research papers covering COVID-19 and earlier coronaviruses.

As scientists around the world work to understand the best ways to diagnosis and treat COVID-19 patients, it is critical that they can easily access the latest research findings. Literature co-occurrence databases automate this knowledge gathering by uncovering meaningful insights based on the patterns and strength of links between keywords that appear in research papers.

After applying natural language processing (Scigraph) to discover biomedical entities including symptoms and drugs in CORD 19 literature, RENCI researchers determined which entities were frequently mentioned together. For example, if the spike protein of the virus was often mentioned in the same sentence as a certain chemical, then the database would indicate that a relationship might exist between the two. They also performed this analysis using entities found by the SciBite team. This co-occurrence information forms a graph of entities that can be used directly or integrated into other databases such as ROBOKOP to perform even more complex data mining.

The Scigraph and SciBite co-occurrence graphs are available at [automat.renci.org](https://automat.renci.org/).