import { createClient,groq } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

  
const config = {
  apiVersion,
  dataset,
  projectId,
  useCdn,
}

export default config
