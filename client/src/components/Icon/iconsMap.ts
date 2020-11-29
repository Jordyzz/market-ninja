const iconsMap = {
  dashboard:
    '<svg height="30px" viewBox="0 0 512 512" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="m197.332031 170.667969h-160c-20.585937 0-37.332031-16.746094-37.332031-37.335938v-96c0-20.585937 16.746094-37.332031 37.332031-37.332031h160c20.589844 0 37.335938 16.746094 37.335938 37.332031v96c0 20.589844-16.746094 37.335938-37.335938 37.335938zm-160-138.667969c-2.941406 0-5.332031 2.390625-5.332031 5.332031v96c0 2.945313 2.390625 5.335938 5.332031 5.335938h160c2.945313 0 5.335938-2.390625 5.335938-5.335938v-96c0-2.941406-2.390625-5.332031-5.335938-5.332031zm0 0"/><path d="m197.332031 512h-160c-20.585937 0-37.332031-16.746094-37.332031-37.332031v-224c0-20.589844 16.746094-37.335938 37.332031-37.335938h160c20.589844 0 37.335938 16.746094 37.335938 37.335938v224c0 20.585937-16.746094 37.332031-37.335938 37.332031zm-160-266.667969c-2.941406 0-5.332031 2.390625-5.332031 5.335938v224c0 2.941406 2.390625 5.332031 5.332031 5.332031h160c2.945313 0 5.335938-2.390625 5.335938-5.332031v-224c0-2.945313-2.390625-5.335938-5.335938-5.335938zm0 0"/><path d="m474.667969 512h-160c-20.589844 0-37.335938-16.746094-37.335938-37.332031v-96c0-20.589844 16.746094-37.335938 37.335938-37.335938h160c20.585937 0 37.332031 16.746094 37.332031 37.335938v96c0 20.585937-16.746094 37.332031-37.332031 37.332031zm-160-138.667969c-2.945313 0-5.335938 2.390625-5.335938 5.335938v96c0 2.941406 2.390625 5.332031 5.335938 5.332031h160c2.941406 0 5.332031-2.390625 5.332031-5.332031v-96c0-2.945313-2.390625-5.335938-5.332031-5.335938zm0 0"/><path d="m474.667969 298.667969h-160c-20.589844 0-37.335938-16.746094-37.335938-37.335938v-224c0-20.585937 16.746094-37.332031 37.335938-37.332031h160c20.585937 0 37.332031 16.746094 37.332031 37.332031v224c0 20.589844-16.746094 37.335938-37.332031 37.335938zm-160-266.667969c-2.945313 0-5.335938 2.390625-5.335938 5.332031v224c0 2.945313 2.390625 5.335938 5.335938 5.335938h160c2.941406 0 5.332031-2.390625 5.332031-5.335938v-224c0-2.941406-2.390625-5.332031-5.332031-5.332031zm0 0"/></svg>',
  market:
    '<svg id="Capa_1" enable-background="new 0 0 512 512" height="30px" viewBox="0 0 512 512" width="30px" xmlns="http://www.w3.org/2000/svg"><g><path d="m495 497v-159.061h-15v159.061h-45v-342.747h45v168.686h15v-183.686h-75v357.747h-45.401l.414-233.634h-75l-.414 233.634h-44.599v-297.488h-75v201.162h15v-186.162h45v282.488h-45v-81.325h-15v81.325h-45v-158.14h-75v158.14h-45v-467h-15v482h512v-15zm-180.014-218.635h45l-.387 218.635h-45zm-239.986 75.495h45v143.14h-45z"/><path d="m0 0h15v15h-15z"/><path d="m97.5 293.842c9.603 0 19.206-3.655 26.517-10.965 14.621-14.622 14.621-38.412 0-53.033-.566-.566-1.15-1.102-1.743-1.625l64.884-89.171c1.14 1.568 2.413 3.068 3.825 4.481 7.311 7.311 16.914 10.965 26.517 10.965s19.206-3.655 26.517-10.965c2.762-2.762 5.001-5.852 6.719-9.145l49.785 40.4c-1.878 11.513 1.603 23.739 10.463 32.599 7.311 7.311 16.914 10.966 26.517 10.966s19.206-3.655 26.517-10.966c12.848-12.848 14.402-32.774 4.67-47.34l68.285-71.905c6.21 4.064 13.368 6.099 20.528 6.099 9.603 0 19.207-3.655 26.517-10.965 14.621-14.622 14.621-38.412 0-53.033-14.623-14.622-38.413-14.621-53.033 0-12.848 12.848-14.401 32.775-4.67 47.34l-68.285 71.905c-14.538-9.515-34.284-7.895-47.045 4.867-1.797 1.797-3.37 3.734-4.725 5.773l-51.311-41.638c.393-10.088-3.247-20.304-10.931-27.989-14.621-14.621-38.411-14.622-53.033 0-8.772 8.773-12.274 20.846-10.52 32.259l-71.295 97.982c-13.001-4.234-27.872-1.206-38.184 9.107-14.621 14.621-14.621 38.412 0 53.033 7.308 7.309 16.911 10.964 26.514 10.964zm344.089-252.998c4.387-4.387 10.147-6.58 15.91-6.58 5.761 0 11.524 2.194 15.91 6.58 8.772 8.773 8.772 23.047 0 31.82s-23.048 8.772-31.82 0c-8.773-8.773-8.773-23.047 0-31.82zm-120 124.111c8.771-8.772 23.047-8.773 31.82 0 8.772 8.773 8.772 23.047 0 31.82-8.773 8.773-23.048 8.772-31.82 0s-8.772-23.047 0-31.82zm-120-63.853c8.773-8.772 23.048-8.772 31.82 0 8.773 8.773 8.773 23.047 0 31.82-8.773 8.772-23.047 8.772-31.82 0-8.772-8.773-8.772-23.047 0-31.82zm-119.999 139.348c4.387-4.387 10.147-6.58 15.91-6.58 5.761 0 11.524 2.194 15.91 6.58 8.772 8.772 8.772 23.047 0 31.82-8.773 8.772-23.048 8.772-31.82 0-8.773-8.773-8.773-23.047 0-31.82z"/><path d="m89.999 467.014h15v15h-15z"/><path d="m449.999 237.229h15v15h-15z"/><path d="m449.999 177.229h15v45h-15z"/><path d="m210 236.999h15v45h-15z"/><path d="m210 296.999h15v15h-15z"/><path d="m330 429.514h15v45h-15z"/><path d="m330 399.513h15v15h-15z"/></g></svg>',
  history:
    '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 width="30px" height="30px" viewBox="0 0 503.379 503.379" style="enable-background:new 0 0 503.379 503.379;"	 xml:space="preserve"><g>	<path d="M458.091,128.116v326.842c0,26.698-21.723,48.421-48.422,48.421h-220.92c-26.699,0-48.421-21.723-48.421-48.421V242.439		c6.907,1.149,13.953,1.894,21.184,1.894c5.128,0,10.161-0.381,15.132-0.969v211.594c0,6.673,5.429,12.104,12.105,12.104h220.92		c6.674,0,12.105-5.432,12.105-12.104V128.116c0-6.676-5.432-12.105-12.105-12.105H289.835c0-12.625-1.897-24.793-5.297-36.315		h125.131C436.368,79.695,458.091,101.417,458.091,128.116z M159.49,228.401c-62.973,0-114.202-51.229-114.202-114.199		C45.289,51.229,96.517,0,159.49,0c62.971,0,114.202,51.229,114.202,114.202C273.692,177.172,222.461,228.401,159.49,228.401z		 M159.49,204.19c49.618,0,89.989-40.364,89.989-89.988c0-49.627-40.365-89.991-89.989-89.991		c-49.626,0-89.991,40.364-89.991,89.991C69.499,163.826,109.87,204.19,159.49,204.19z M227.981,126.308		c6.682,0,12.105-5.423,12.105-12.105s-5.423-12.105-12.105-12.105h-56.386v-47.52c0-6.682-5.423-12.105-12.105-12.105		s-12.105,5.423-12.105,12.105v59.625c0,6.682,5.423,12.105,12.105,12.105H227.981z M367.697,224.456h-131.14		c-6.682,0-12.105,5.423-12.105,12.105c0,6.683,5.423,12.105,12.105,12.105h131.14c6.685,0,12.105-5.423,12.105-12.105		C379.803,229.879,374.382,224.456,367.697,224.456z M367.91,297.885h-131.14c-6.682,0-12.105,5.42-12.105,12.105		s5.423,12.105,12.105,12.105h131.14c6.685,0,12.104-5.42,12.104-12.105S374.601,297.885,367.91,297.885z M367.91,374.353h-131.14		c-6.682,0-12.105,5.426-12.105,12.105c0,6.685,5.423,12.104,12.105,12.104h131.14c6.685,0,12.104-5.42,12.104-12.104		C380.015,379.778,374.601,374.353,367.91,374.353z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
  sun:
    '<svg id="Capa_1" enable-background="new 0 0 512 512" height="20px" viewBox="0 0 512 512" width="20px" xmlns="http://www.w3.org/2000/svg"><g><path d="m79.219 432.781c3.907 3.905 10.237 3.905 14.143 0l63.64-63.64c3.905-3.905 3.905-10.237 0-14.143-3.905-3.903-10.237-3.904-14.142 0l-63.641 63.64c-3.905 3.906-3.906 10.238 0 14.143z"/><path d="m418.639 79.219-63.64 63.64c-3.905 3.905-3.905 10.237 0 14.143 3.907 3.905 10.236 3.904 14.143 0l63.64-63.64c3.905-3.905 3.905-10.237 0-14.143-3.907-3.905-10.237-3.905-14.143 0z"/><path d="m93.361 79.219c-3.905-3.904-10.237-3.904-14.143 0-3.905 3.905-3.905 10.237 0 14.143l63.641 63.64c3.906 3.905 10.237 3.904 14.142 0 3.905-3.905 3.905-10.237 0-14.143z"/><path d="m432.781 432.781c3.905-3.905 3.905-10.237 0-14.143l-63.64-63.64c-3.906-3.904-10.236-3.904-14.143 0-3.905 3.905-3.905 10.237 0 14.143l63.64 63.64c3.908 3.906 10.237 3.905 14.143 0z"/><path d="m304.161 398.407 22.96 55.43c2.096 5.058 7.917 7.541 13.066 5.412 5.103-2.114 7.525-7.964 5.412-13.066l-22.96-55.43c-2.115-5.103-7.963-7.522-13.066-5.412-5.102 2.114-7.525 7.964-5.412 13.066z"/><path d="m202.427 126.659c5.103-2.114 7.526-7.964 5.412-13.066l-22.96-55.43c-2.114-5.102-7.965-7.524-13.065-5.412-5.103 2.114-7.526 7.964-5.412 13.066l22.96 55.43c2.1 5.07 7.929 7.537 13.065 5.412z"/><path d="m113.593 304.161-55.43 22.96c-5.103 2.114-7.526 7.964-5.412 13.066 2.101 5.07 7.929 7.537 13.065 5.412l55.43-22.96c5.103-2.114 7.526-7.964 5.412-13.066-2.113-5.101-7.963-7.524-13.065-5.412z"/><path d="m453.837 184.879c5.103-2.114 7.525-7.964 5.412-13.066-2.114-5.103-7.963-7.522-13.066-5.412l-55.43 22.96c-5.103 2.114-7.525 7.964-5.412 13.066 2.096 5.058 7.917 7.541 13.066 5.412z"/><path d="m453.837 327.121-55.43-22.96c-5.103-2.108-10.952.31-13.066 5.412-2.113 5.103.31 10.952 5.412 13.066l55.43 22.96c5.154 2.131 10.972-.357 13.066-5.412 2.113-5.102-.31-10.952-5.412-13.066z"/><path d="m52.751 171.813c-2.114 5.103.31 10.952 5.412 13.066l55.43 22.96c5.142 2.127 10.967-.346 13.065-5.412 2.114-5.103-.31-10.952-5.412-13.066l-55.43-22.96c-5.1-2.11-10.951.31-13.065 5.412z"/><path d="m184.879 453.837 22.96-55.43c2.114-5.103-.31-10.952-5.412-13.066-5.102-2.109-10.951.311-13.065 5.412l-22.96 55.43c-2.114 5.103.31 10.952 5.412 13.066 5.141 2.127 10.966-.346 13.065-5.412z"/><path d="m304.161 113.593c-2.113 5.103.31 10.952 5.412 13.066 5.154 2.131 10.972-.357 13.066-5.412l22.96-55.43c2.113-5.103-.31-10.952-5.412-13.066-5.103-2.108-10.951.311-13.066 5.412z"/><path d="m266 502v-96c0-5.522-4.478-10-10-10s-10 4.478-10 10v96c0 5.522 4.478 10 10 10s10-4.478 10-10z"/><path d="m266 106v-96c0-5.522-4.478-10-10-10s-10 4.478-10 10v96c0 5.522 4.478 10 10 10s10-4.478 10-10z"/><path d="m0 256c0 5.522 4.477 10 10 10h96c5.523 0 10-4.478 10-10s-4.477-10-10-10h-96c-5.523 0-10 4.478-10 10z"/><path d="m502 246h-96c-5.522 0-10 4.478-10 10s4.478 10 10 10h96c5.522 0 10-4.478 10-10s-4.478-10-10-10z"/><circle cx="320" cy="320" r="10"/><path d="m256 356c9.448 0 18.802-1.318 27.801-3.917 5.306-1.532 8.364-7.076 6.832-12.383-1.532-5.306-7.078-8.362-12.383-6.832-7.194 2.078-14.68 3.132-22.25 3.132-44.112 0-80-35.888-80-80s35.888-80 80-80 80 35.888 80 80c0 7.57-1.054 15.056-3.132 22.25-1.532 5.307 1.526 10.851 6.832 12.383 5.309 1.53 10.851-1.527 12.383-6.832 2.599-8.999 3.917-18.353 3.917-27.801 0-55.141-44.859-100-100-100-55.14 0-100 44.859-100 100s44.86 100 100 100z"/></g></svg>',
  moon:
    '<svg id="Capa_1" enable-background="new 0 0 512 512" height="20px" viewBox="0 0 512 512" width="20px" xmlns="http://www.w3.org/2000/svg"><g><path d="m123.467 31.566h9.066v9.067c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-9.067h9.066c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-9.066v-9.066c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v9.066h-9.066c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5z"/><path d="m388.533 480.434h-9.066v-9.067c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v9.067h-9.067c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h9.066v9.066c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-9.066h9.066c4.143 0 7.5-3.357 7.5-7.5s-3.356-7.5-7.499-7.5z"/><path d="m139.25 305.7c0-13.271-10.796-24.066-24.066-24.066s-24.068 10.796-24.068 24.066 10.797 24.066 24.067 24.066 24.067-10.795 24.067-24.066zm-24.066 9.067c-5 0-9.067-4.067-9.067-9.066s4.067-9.066 9.067-9.066c4.999 0 9.066 4.067 9.066 9.066s-4.067 9.066-9.066 9.066z"/><path d="m131.75 263.5c13.27 0 24.066-10.796 24.066-24.066s-10.796-24.067-24.066-24.067-24.066 10.797-24.066 24.067 10.795 24.066 24.066 24.066zm0-33.134c4.999 0 9.066 4.067 9.066 9.067 0 4.999-4.067 9.066-9.066 9.066s-9.066-4.067-9.066-9.066 4.067-9.067 9.066-9.067z"/><path d="m462.3 255.666c-.011-6.411-4.423-11.787-10.729-13.074-6.296-1.279-12.45 1.93-14.968 7.814-21.044 49.196-69.145 80.929-122.624 80.929-.117 0-.242-.001-.359-.001-73.116-.195-132.759-59.838-132.953-132.953-.143-53.619 31.623-101.894 80.929-122.983 5.884-2.518 9.097-8.672 7.812-14.968-1.287-6.306-6.663-10.718-13.087-10.729h-.321c-49.345 0-97.096 17.697-134.458 49.832-3.141 2.701-3.496 7.437-.796 10.577 2.702 3.142 7.437 3.495 10.577.796 32.781-28.195 74.191-44.403 117.316-46.063-50.804 24.916-83.125 76.527-82.973 133.577.217 81.343 66.569 147.696 147.913 147.914.134 0 .266.001.4.001 56.893-.002 108.324-32.289 133.18-82.979-3.882 102.084-88.141 183.944-191.159 183.944-8.348 0-16.77-.549-25.034-1.632-.476-.062-.641-.589-.663-.892-.071-.97-.205-1.953-.397-2.922-2.131-10.735-11.224-18.696-22.113-19.359-8.759-.518-17.137 3.747-21.829 11.172-.079.126-.434.221-.782.082-19.635-7.83-37.752-18.818-53.85-32.661-3.139-2.701-7.875-2.346-10.576.797-2.701 3.141-2.344 7.876.797 10.576 17.356 14.926 36.895 26.776 58.071 35.221 7.049 2.812 15.046.287 19.021-6.003 1.768-2.799 4.926-4.42 8.236-4.211 4.024.245 7.52 3.318 8.311 7.308.073.371.125.742.151 1.102.562 7.652 6.185 13.683 13.673 14.664 8.908 1.167 17.986 1.759 26.983 1.759 113.754 0 206.3-92.546 206.3-206.3v-.335z"/><path d="m64.7 256c0-45.757 16.409-90.035 46.205-124.677 2.7-3.141 2.345-7.876-.796-10.577-3.14-2.7-7.875-2.346-10.577.796-32.135 37.362-49.832 85.113-49.832 134.458 0 49.343 17.699 97.092 49.837 134.451 1.483 1.724 3.58 2.608 5.688 2.608 1.732 0 3.473-.597 4.889-1.815 3.14-2.701 3.495-7.436.794-10.577-29.798-34.637-46.208-78.912-46.208-124.667z"/><path d="m463.083 381.033c-4.143 0-7.5 3.357-7.5 7.5v16.567c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-16.566c0-4.143-3.357-7.501-7.5-7.501z"/><path d="m463.083 447.3c-4.143 0-7.5 3.357-7.5 7.5v16.566c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-16.566c0-4.143-3.357-7.5-7.5-7.5z"/><path d="m504.5 422.45h-16.566c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h16.566c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z"/><path d="m438.233 422.45h-16.566c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h16.566c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z"/><path d="m48.917 64.7c4.143 0 7.5-3.357 7.5-7.5v-16.566c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v16.566c0 4.143 3.357 7.5 7.5 7.5z"/><path d="m56.417 123.467v-16.567c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v16.566c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.499z"/><path d="m73.767 89.55h16.566c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-16.566c-4.143 0-7.5 3.357-7.5 7.5 0 4.142 3.357 7.5 7.5 7.5z"/><path d="m24.066 74.55h-16.566c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h16.566c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z"/></g></svg>',
  sort:
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 16 16"><path fill="#444444" d="M11 7h-6l3-4z"></path><path fill="#444444" d="M5 9h6l-3 4z"></path></svg>',
  circle:
    '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" x="0px" y="0px"	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g>	<g>		<path fill="#2e2a4d" d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
  checked:
    '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px"	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><ellipse style="fill:#23eaa4;" cx="256" cy="256" rx="256" ry="255.832"/><polygon style="fill:#15796c;" points="235.472,392.08 114.432,297.784 148.848,253.616 223.176,311.52 345.848,134.504 	391.88,166.392 "/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
  downArrow:
    '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" height="10px"	 viewBox="0 0 386.257 386.257" style="enable-background:new 0 0 386.257 386.257;" xml:space="preserve"><polygon points="0,96.879 193.129,289.379 386.257,96.879 "/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
  upArrow:
    '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" height="10px"	 viewBox="0 0 386.257 386.257" style="enable-background:new 0 0 386.257 386.257;" xml:space="preserve"><polygon points="193.129,96.879 0,289.379 386.257,289.379 "/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
  favorites:
    '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="12px" height="12px"	 viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve"><g>	<g>		<path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157			c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065			c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671			c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638			l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955			C511.56,208.649,513.033,202.688,511.267,197.258z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
  search:
    '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" x="0px" y="0px"	 viewBox="0 0 396.819 396.819" style="enable-background:new 0 0 396.819 396.819;" xml:space="preserve"><g>	<g>		<path d="M352.103,44.679c-59.237-59.401-155.412-59.535-214.813-0.298c-57.316,57.157-59.741,149.218-5.515,209.314l-11.6,11.6			c-9.372-9.373-24.568-9.375-33.941-0.003c-0.001,0.001-0.002,0.002-0.003,0.003l-79.2,79.2			c-9.373,9.372-9.375,24.568-0.003,33.941c0.001,0.001,0.002,0.002,0.003,0.003l11.312,11.312c9.372,9.369,24.564,9.369,33.936,0			l79.2-79.2c9.373-9.372,9.375-24.568,0.003-33.941c-0.001-0.001-0.002-0.002-0.003-0.003l11.6-11.6			c62.24,56.247,158.292,51.388,214.539-10.851C411.948,194.037,409.521,101.856,352.103,44.679z M120.175,299.231l-79.2,79.2			c-3.124,3.123-8.188,3.123-11.312,0l-11.312-11.32c-3.118-3.123-3.118-8.181,0-11.304l79.2-79.2c3.164-3.025,8.148-3.025,11.312,0			l11.312,11.32C123.293,291.05,123.293,296.108,120.175,299.231z M340.799,248.327c-53.112,53.11-139.223,53.109-192.333-0.003			s-53.109-139.223,0.003-192.333c53.111-53.109,139.219-53.109,192.33,0C393.824,109.139,393.824,195.179,340.799,248.327z"/>	</g></g><g>	<g>		<path d="M329.479,67.303L329.479,67.303l-11.312,11.312c40.545,40.644,40.545,106.436,0,147.08l11.312,11.312			C376.275,190.117,376.275,114.193,329.479,67.303z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
};

export default iconsMap;
