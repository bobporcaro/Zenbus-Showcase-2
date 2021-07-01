---
layout: blog-article
title: Vous avez dit MaaS¹&nbsp;?
date: 2020-10-09
image: gmaps4.png
categories: [technical, business]
tags:
author: simon
lang: fr
---

Ça y est : Zenbus alimente Google Maps en données GTFS-RT²&nbsp;! Comprendre en données temps réel, dynamiques donc, et pas simplement théoriques.

![Tout'enbus sur Google Maps](/assets/img/blog/plop2.jpg)
*La ligne 1 de Tout'enbus Aubenas en temps réel sur Google Maps*
{: style="font-size: 14px; text-align: center; display:block; margin: auto; width: 60%"}
<br>
Ça se passe où&nbsp;? Dans une grande métropole&nbsp;? Au coeur d’un projet européen smart City&nbsp;?
Non. Ça se passe sur le réseau d’Aubenas, en Ardèche, ville d’un peu plus de 10 000 habitants, et disposant d’un réseau de bus de 7 lignes régulières et quelques lignes scolaires. 

L’occasion de vous faire les sous-titres sur ce que suppose une telle réutilisation, d’un point de vue de l’architecture et des usages.
 
D’un point de vue technique, sur un réseau de transport collectif, il faut avoir en tête l’existence de deux catégories d’acteurs : les producteurs de données et derrière, les réutilisateurs. 
 
Sans les premiers, la donnée temps-réel n’existe pas. Et selon la manière dont ils arrivent à produire, retraiter et ouvrir cette donnée, les “réutilisateurs” pourront à leur tour l’exploiter et par exemple la rendre disponible pour les voyageurs. Ces réutilisateurs, au modèle économique essentiellement B2C, sont de fait les plus connus des deux catégories : ce sont principalement les plates-formes multimodales présentes à travers le monde (ex : Google Maps, Citymapper, Moovit,...) et tous les services locaux développés pour les réseaux ou les régions (ex: sites web, centrales, concentrateurs, etc.).
 
On comprend rapidement que la donnée disponible “en sortie” sur l’écran des voyageurs, qu’il s’agisse de l’heure prévisionnelle d’arrivée d’un bus à un arrêt ou d’un calcul d’itinéraires plus complexe intégrant plusieurs modes de transport, ne pourra être fiable, et donc réellement utile, qu’avec une chaîne de traitement optimisée, depuis le moment où la donnée est produite dans le véhicule concerné.
 
Regardons de plus près cette chaîne : échantillonnage local dans le véhicule et premiers retraitements, envoi de cette donnée vers un serveur, retraitement de la donnée à la fois pour la nettoyer et idéalement la mettre sous un format standard, compréhensible donc par d’autres systèmes, puis mise à disposition de cette donnée.... autant d’étapes à-même d’introduire de la latence et donc une donnée qui dans les mains du voyageur souffre d’un décalage gênant et déceptif avec la réalité. De plus, à cette transmission de donnée “brute” s'ajoute une notion de prédiction d’heure d’arrivée qui aura d’autant plus de mal à être pertinente que la donnée source sera imprécise.
Il y a alors un écart tel entre les données fournies au voyageur et la réalité que l’information devient inutilisable et dégrade le lien de confiance avec les transports collectifs...qui en ont pourtant besoin plus que jamais.
Pour revenir au cas d’Aubenas, si la donnée est dorénavant disponible sur Google Maps et donc intégrée au calcul d’itinéraire, c’est qu’un acteur, Zenbus, produit, retraite et met à disposition au standard attendu les données temps-réel du réseau de transport.
Plus largement, la donnée est mise à disposition sous le format GTFS-RT, standard et utilisable donc par qui veut. C’est l’esprit même de l’ouverture prônée par la [Loi d’Orientation des Mobilités](https://zenbus.fr/LOM.pdf){:target="_blank"} et incarnée par le Point d’Accès National sur lequel quelques jeux de données dynamiques (une grosse vingtaine à date) sont déjà disponibles.
 
Ajoutons que cette information temps réel est également accessible sur l'application Zenbus, avec la vision cartographique précise des véhicules en déplacement.
 
*¹: Mobility As A Service, type de service permettant aux utilisateurs de planifier, réserver, etc... pour plusieurs types de services de mobilité* <br>
*²: Couplé au [GTFS (General Transit Feed Specifications)](https://developers.google.com/transit/gtfs?hl=fr){:target="_blank"}, le [GTFS-RT](https://developers.google.com/transit/gtfs-realtime?hl=fr){:target="_blank"} décrit l'état d'un réseau de transport en temps réel*
 
👉 [Lien vers réseau d’Aubenas - Toutenbus](https://zenbus.net/toutenbus){:target="_blank"}
