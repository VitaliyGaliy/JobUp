/* eslint key-spacing:0 spaced-comment:0 */
import _debug from 'debug'
import environments from './environments'

const debug = _debug('app:react')

// ========================================================
// Default Configuration
// ========================================================
import environments from './environments'
import { str } from '../../../modules/utils'

// ========================================================
// Default Configuration
// ========================================================
// const config = {
//   env: process.env.NODE_ENV || 'development',
//   imghost: 'https://4en5mei.nl',
//   backend: {
//     fetchMonuments: str.template`${'host'}/plugins/modules/api/oorlogsmonumenten_with_photobook.php?limit=${'limit'}&offset=${'offset'}&latitude=${'latitude'}&longitude=${'longitude'}`,
//     fetchMonumentId: str.template`${'host'}/plugins/modules/api/oorlogsmonumenten_with_photobook.php?id=${'id'}`,
//     // fetchSearch: str.template`${'host'}/plugins/modules/api/oorlogsmonumenten_with_photobook.php?q=${'q'}&latitude=${'latitude'}&longitude=${'longitude'}&limit=100&offset=0`,
//     fetchSearch: str.template`${'host'}/plugins/modules/api/search.php?q=${'q'}`,
//     fetchSearchId: str.template`${'host'}/plugins/modules/xsearch/suggestions.php?q=${'search'}`,
//     fetchMonumentsCoord: str.template`${'host'}/plugins/modules/api/oorlogsmonumenten_coordinates.php?limit=${'limit'}&offset=${'offset'}`,
//     fetchMonumentsCoordsById: str.template`${'host'}/plugins/modules/api/oorlogsmonumenten_coordinates.php?id=${'id'}`,
//     fetchComments: str.template`${'host'}/plugins/modules/api/oorlogsmonumenten_comments.php?id=${'id'}`,
//     fetchAgendaId: str.template`${'host'}/plugins/modules/api/agenda_items.php?monumentID=${'id'}`,
//     fetchWitness: str.template`${'host'}/plugins/modules/api/witnessaccounts`,
//     postingComment: str.template`${'host'}/plugins/modules/api/oorlogsmonumenten_comments.php?id=${'id'}`,
//     postAgenda: str.template`${'host'}/plugins/modules/api/agenda_items.php`,
//     uploadComment: str.template`${'host'}/plugins/modules/api/upload_comment.php`,
//     ajaxHandler: str.template`${'host'}/ajax_handler.php`,
//     // str.template`${'host'}/route.php?url=oorlogsmonumenten_with_photobook.php%3Flimit%3D${'limit'}
//     // %26offset%3D${'limit'}`,
//   },
//   method: {
//     fetchMonuments: 'GET',
//     fetchMonumentId: 'GET',
//     fetchSearch: 'GET',
//     fetchSearchId: 'GET',
//     fetchMonumentsCoord: 'GET',
//     fetchMonumentsCoordsById: 'GET',
//     fetchComments: 'GET',
//     fetchAgendaId: 'GET',
//     postingComment: 'POST',
//     postAgenda: 'POST',
//     fetchWitness: 'GET',
//     uploadComment: 'POST',
//     ajaxHandler: 'POST',
//   },
// }


// ========================================================
// Environment Configuration
// ========================================================
const overrides = environments[config.env]
if (overrides) {
  Object.assign(config, overrides(config))
} else {
  debug('No environment overrides found, defaults will be used.')
}

export default config
