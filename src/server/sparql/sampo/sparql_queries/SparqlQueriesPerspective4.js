const perspectiveID = 'perspective4'

export const ImageInstanceProperties = `
    {
      ?id a schema:Person .
      BIND(REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1") AS ?uri__prefLabel)
      BIND(CONCAT("/person/page/", REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1")) AS ?uri__dataProviderUrl)
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
      ?id schema:mentions ?mentions__id .
      OPTIONAL {
        ?mentions__id dct:title ?mentionsLabel .
      }
      BIND(COALESCE(?mentionsLabel, REPLACE(STR(?mentions__id), "^.*[/#]([^/#]+)$", "$1")) AS ?mentions__prefLabel)
      BIND(REPLACE(STR(?mentions__id), "^.*/([^/]+)/?$", "$1") AS ?idOnly)
      BIND(CONCAT("/object/page/", REPLACE(STR(?idOnly), "^.*[/#]([^/#]+)$", "$1")) AS ?mentions__dataProviderUrl)
    }
    UNION
    {
      ?id schema:name ?name__id .
      OPTIONAL {
        ?name__id rdfs:label ?nameLabel .
        FILTER(LANG(?nameLabel) = 'lv')
      }
      BIND(COALESCE(?nameLabel, REPLACE(STR(?name__id), "^.*[/#]([^/#]+)$", "$1")) AS ?name__prefLabel)
    }
    UNION
    {
      ?id schema:sameAs ?sameAs__id .
      BIND(REPLACE(STR(?sameAs__id), "^.*[/#]([^/#]+)$", "$1") AS ?sameAs__prefLabel)
      BIND(STR(?sameAs__id) AS ?sameAs__prefLabel)
      BIND(?sameAs__id AS ?sameAs__dataProviderUrl)
    }
`