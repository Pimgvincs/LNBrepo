const perspectiveID = 'perspective1'

export const CreativeWorkInstanceProperties = `
    {
      ?id a schema:CreativeWork .
      BIND(REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1") AS ?uri__prefLabel)
      BIND(CONCAT("/object/page/", REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1")) AS ?uri__dataProviderUrl)
    }
    UNION
    {
      ?id dc:type ?type__id .
      OPTIONAL {
        ?type__id rdfs:label ?typeLabel .
      }
      BIND(COALESCE(?typeLabel, REPLACE(STR(?type__id), "^.*[/#]([^/#]+)$", "$1"))  AS ?type__prefLabel)
    }
    UNION
    {
      ?id dct:identifier ?identifier__id .
      OPTIONAL {
        ?identifier__id rdfs:label ?identifierLabel .
      }
      BIND(COALESCE(?identifierLabel, REPLACE(STR(?identifier__id), "^.*[/#]([^/#]+)$", "$1"))  AS ?identifier__prefLabel)
    }
    UNION
    {
      ?id dct:creator ?creator__id .
      OPTIONAL {
        ?creator__id rdfs:label ?creatorLabel .
      }
      BIND(COALESCE(?creatorLabel, REPLACE(STR(?creator__id), "^.*[/#]([^/#]+)$", "$1"))  AS ?creator__prefLabel)
      BIND(?creator__id AS ?creator__dataProviderUrl)
    }
    UNION
    {
      ?id schema:author ?author__id .
      OPTIONAL {
        ?author__id rdfs:label ?authorLabel .
      }
      BIND(COALESCE(?authorLabel, REPLACE(STR(?author__id), "^.*[/#]([^/#]+)$", "$1"))  AS ?author__prefLabel)
      BIND(?author__id AS ?author__dataProviderUrl)
    }
    UNION
    {
      ?id bibo:owner ?owner__id .
      OPTIONAL {
        ?owner__id rdfs:label ?ownerLabel .
      }
      BIND(COALESCE(?ownerLabel, REPLACE(STR(?owner__id), "^.*[/#]([^/#]+)$", "$1"))  AS ?owner__prefLabel)
    }
    UNION
    {
      ?id dc:publisher ?publisher__id .
      OPTIONAL {
        ?publisher__id rdfs:label ?publisherLabel .
      }
      BIND(COALESCE(?publisherLabel, REPLACE(STR(?publisher__id), "^.*[/#]([^/#]+)$", "$1"))  AS ?publisher__prefLabel)
    }
    UNION
    {
      ?id bibo:place ?place__id .
      OPTIONAL {
        ?place__id rdfs:label ?placeLabel .
      }
      BIND(COALESCE(?placeLabel, REPLACE(STR(?place__id), "^.*[/#]([^/#]+)$", "$1"))  AS ?place__prefLabel)
    }
    UNION
    {
      ?id dct:date ?date__id .
      OPTIONAL {
        ?date__id rdfs:label ?dateLabel .
      }
      BIND(COALESCE(?dateLabel, REPLACE(STR(?date__id), "^.*[/#]([^/#]+)$", "$1"))  AS ?date__prefLabel)
    }
    UNION
    {
      ?id dct:hasPart ?hasPart__id .
      OPTIONAL {
        ?hasPart__id rdfs:label ?hasPartLabel .
      }
      BIND(STR(?hasPart__id) AS ?hasPart__prefLabel)
      BIND(?hasPart__id AS ?hasPart__dataProviderUrl)
    }
    UNION
    {
      ?id dct:isPartOf ?isPartOf__id .
      OPTIONAL {
        ?isPartOf__id rdfs:label ?isPartOfLabel .
      }
      BIND(STR(?isPartOf__id) AS ?isPartOf__prefLabel)
      BIND(?isPartOf__id AS ?isPartOf__dataProviderUrl)
    }
    UNION
    {
      ?id foaf:page ?page__id .
      OPTIONAL {
        ?page__id rdfs:label ?pageLabel .
      }
      BIND(STR(?page__id) AS ?page__prefLabel)
      BIND(?page__id AS ?page__dataProviderUrl)
    }
    UNION
    {
      ?id dct:language ?language__id .
      OPTIONAL {
        ?language__id rdfs:label ?languageLabel .
        FILTER(LANG(?languageLabel) = 'en')
      }
      BIND(COALESCE(?languageLabel, REPLACE(STR(?language__id), "^.*[/#]([^/#]+)$", "$1")) AS ?language__prefLabel)
    }
    UNION
    {
      ?id dct:source ?source__id .
      OPTIONAL {
        ?source__id rdfs:label ?sourceLabel .
      }
      BIND(STR(?source__id) AS ?source__prefLabel)
      BIND(?source__id AS ?source__dataProviderUrl)
    }
    UNION
    {
      ?id dct:subject ?subject__id .
      OPTIONAL {
        ?subject__id rdfs:label ?subjectLabel .
      }
      BIND(COALESCE(?subjectLabel, REPLACE(STR(?subject__id), "^.*[/#]([^/#]+)$", "$1"))  AS ?subject__prefLabel)
    }
    UNION
    {
      ?id dct:title ?title__id .
      OPTIONAL {
        ?title__id rdfs:label ?titleLabel .
      }
      BIND(COALESCE(?titleLabel, REPLACE(STR(?title__id), "^.*[/#]([^/#]+)$", "$1")) AS ?title__prefLabel)
    }
    UNION
    {
      ?id schema:name ?name__id .
      OPTIONAL {
        ?name__id rdfs:label ?nameLabel .
      }
      BIND(COALESCE(?nameLabel, REPLACE(STR(?name__id), "^.*[/#]([^/#]+)$", "$1")) AS ?name__prefLabel)
    }
    UNION
    {
      ?id bibo:annotates ?annotates__id .
      OPTIONAL {
        ?annotates__id dct:title ?annotatesLabel .
      }
      BIND(COALESCE(?annotatesLabel, REPLACE(STR(?annotates__id), "^.*[/#]([^/#]+)$", "$1")) AS ?annotates__prefLabel)
      BIND(REPLACE(STR(?annotates__id), "^.*/([^/]+)/?$", "$1") AS ?idOnly)
      BIND(CONCAT("/object/page/", REPLACE(STR(?idOnly), "^.*[/#]([^/#]+)$", "$1")) AS ?annotates__dataProviderUrl)
    }
    UNION
    {
      ?id bibo:recipient ?recipient__id .
      OPTIONAL {
        ?recipient__id rdfs:label ?recipientLabel .
      }
      BIND(COALESCE(?recipientLabel, REPLACE(STR(?recipient__id), "^.*[/#]([^/#]+)$", "$1"))  AS ?recipient__prefLabel)
    }
    UNION
    {
      ?id schema:datePublished ?datePublished__id .
      OPTIONAL {
        ?datePublished__id rdfs:label ?datePublishedLabel .
        FILTER(LANG(?datePublishedLabel) = 'en')
      }
      BIND(COALESCE(?datePublishedLabel, REPLACE(STR(?datePublished__id), "^.*[/#]([^/#]+)$", "$1")) AS ?datePublished__prefLabel)
    }
    UNION
    {
      ?id schema:description ?description__id .
      OPTIONAL {
        ?description__id rdfs:label ?descriptionLabel .
        FILTER(LANG(?descriptionLabel) = 'en')
      }
      BIND(COALESCE(?descriptionLabel, REPLACE(STR(?description__id), "^.*[/#]([^/#]+)$", "$1")) AS ?description__prefLabel)
    }
    UNION
    {
      ?id dct:abstract ?abstract__id .
      OPTIONAL {
        ?abstract__id rdfs:label ?abstractLabel .
      }
      BIND(COALESCE(?abstractLabel, REPLACE(STR(?abstract__id), "^.*[/#]([^/#]+)$", "$1")) AS ?abstract__prefLabel)
    }
    UNION
    {
      ?id schema:mentions ?mentions__id .
      OPTIONAL {
        ?mentions__id schema:name ?mentionsLabel .
      }
      BIND(COALESCE(?mentionsLabel, REPLACE(STR(?mentions__id), "^.*[/#]([^/#]+)$", "$1")) AS ?mentions__prefLabel)
      BIND(REPLACE(STR(?mentions__id), "^.*/([^/]+)/?$", "$1") AS ?idOnly)
      BIND(CONCAT("/entity/page/", REPLACE(STR(?idOnly), "^.*[/#]([^/#]+)$", "$1")) AS ?mentions__dataProviderUrl)
    }
    UNION
    {
      ?id dc:references ?references__id .
      OPTIONAL {
        ?references__id dct:title ?referencesLabel .
      }
      BIND(COALESCE(?referencesLabel, REPLACE(STR(?references__id), "^.*[/#]([^/#]+)$", "$1")) AS ?references__prefLabel)
      BIND(REPLACE(STR(?references__id), "^.*/([^/]+)/?$", "$1") AS ?idOnly)
      BIND(CONCAT("/object/page/", REPLACE(STR(?idOnly), "^.*[/#]([^/#]+)$", "$1")) AS ?references__dataProviderUrl)
    }
    UNION
    {
      ?id schema:sameAs ?sameAs__id .
      BIND(REPLACE(STR(?sameAs__id), "^.*[/#]([^/#]+)$", "$1") AS ?sameAs__prefLabel)
      BIND(STR(?sameAs__id) AS ?sameAs__prefLabel)
      BIND(?sameAs__id AS ?sameAs__dataProviderUrl)
    }
    UNION
    {
      ?id schema:thumbnailUrl ?thumbnailUrl__id .
      BIND(REPLACE(STR(?thumbnailUrl__id), "^.*[/#]([^/#]+)$", "$1") AS ?thumbnailUrl__prefLabel)
      BIND(STR(?thumbnailUrl__id) AS ?thumbnailUrl__prefLabel)
      BIND(?thumbnailUrl__id AS ?thumbnailUrl__dataProviderUrl)
    }
    UNION
    {
      ?id rdfs:comment ?comment__id .
      OPTIONAL {
        ?comment__id rdfs:label ?commentLabel .
        FILTER(LANG(?thumbnailUrlLabel) = 'en')
      }
      BIND(COALESCE(?commentLabel, REPLACE(STR(?comment__id), "^.*[/#]([^/#]+)$", "$1"))  AS ?comment__prefLabel)
    }
`