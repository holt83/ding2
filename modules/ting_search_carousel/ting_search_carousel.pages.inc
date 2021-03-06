<?php
/**
 * @file
 * Handles search carousel pages data.
 */

/**
 * AJAX callback to retrieve carousel items.
 *
 * @param int $index
 *   Configuration index.
 * @param int $offset
 *   Offset into result to fetch from.
 */
function ting_search_carousel_result($index, $offset) {
  $content = '';
  $chunk = _ting_search_carousel_get_frontpage_covers($index, $offset, TING_SEARCH_CAROUSEL_CHUNK_SIZE);
  foreach ($chunk['collections'] as $collection) {
    $content .= theme('ting_search_carousel_collection', array('collection' => $collection));
  }
  $offset = $chunk['next_offset'];

  // Return JSON output.
  drupal_json_output(array(
    'content' => $content,
    'index' => $index,
    'offset' => $offset,
  ));
}
