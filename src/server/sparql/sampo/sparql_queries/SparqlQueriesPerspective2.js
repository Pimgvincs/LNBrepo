const perspectiveID = 'perspective2'

export const PhotographInstanceProperties = `
    {
      ?id a schema:Photograph .
      BIND(?id AS ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
      BIND(REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1") AS ?uri__prefLabel)
      BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1")) AS ?uri__dataProviderUrl)
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
      ?id dct:abstract ?abstract__id .
      OPTIONAL {
        ?abstract__id rdfs:label ?abstractLabel .
      }
      BIND(COALESCE(?abstractLabel, REPLACE(STR(?abstract__id), "^.*[/#]([^/#]+)$", "$1")) AS ?abstract__prefLabel)
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
      BIND(COALESCE(?subjectLabel, REPLACE(STR(?subject__id), "^.*[/#]([^/#]+)$", "$1")) AS ?subject__prefLabel)
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
      ?id bibo:owner ?owner__id .
      OPTIONAL {
        ?owner__id rdfs:label ?ownerLabel .
      }
      BIND(COALESCE(?ownerLabel, REPLACE(STR(?owner__id), "^.*[/#]([^/#]+)$", "$1")) AS ?owner__prefLabel)
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
      ?id schema:author ?author__id .
      OPTIONAL {
        ?author__id rdfs:label ?authorLabel .
      }
      BIND(COALESCE(?authorLabel, REPLACE(STR(?author__id), "^.*[/#]([^/#]+)$", "$1")) AS ?author__prefLabel)
      BIND(?author__id AS ?author__dataProviderUrl)
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
`