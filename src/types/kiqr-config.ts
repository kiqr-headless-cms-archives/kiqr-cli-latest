import { ContentType } from '@kiqr/core-api'

type TemporaryRelation = []

export interface KiqrConfig {
  apiVersion: number
  kind: 'project' | 'plugin'
  projectId: string
  contentTypes: Record<string, ContentType>
  relations: Array<TemporaryRelation>
}
