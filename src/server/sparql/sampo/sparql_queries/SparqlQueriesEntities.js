export const EntityInstanceProperties = `
    {
      ?id a schema:CreativeWork .
      BIND(REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1") AS ?uri__prefLabel)
      BIND(CONCAT("/entity/page/", REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1")) AS ?uri__dataProviderUrl)
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
      ?id schema:name ?name__id .
      OPTIONAL {
        ?name__id rdfs:label ?nameLabel .
      }
      BIND(COALESCE(?nameLabel, REPLACE(STR(?name__id), "^.*[/#]([^/#]+)$", "$1")) AS ?name__prefLabel)
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
      ?id foaf:page ?page__id .
      OPTIONAL {
        ?page__id rdfs:label ?pageLabel .
      }
      BIND(STR(?page__id) AS ?page__prefLabel)
      BIND(?page__id AS ?page__dataProviderUrl)
    }
    UNION
    {
      ?id schema:sameAs ?sameAs__id .
      BIND(REPLACE(STR(?sameAs__id), "^.*[/#]([^/#]+)$", "$1") AS ?sameAs__prefLabel)
      BIND(STR(?sameAs__id) AS ?sameAs__prefLabel)
      BIND(?sameAs__id AS ?sameAs__dataProviderUrl)
    }
`