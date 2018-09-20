/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */

import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import ooooGif from '../media/gifpop_index.gif'
import '../layouts/index.css'

const Page = styled('div')`
	${tw`flex justify-center items-center absolute pin`};
`

const Container = styled('div')`
	${tw`flex justify-center items-center bg-white container my-4 mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden font-sans`};
`

const Wrapper = styled('div')`
	${tw`flex flex-col sm:items-center px-6 py-4`};
`

export default () => (
	<Page>
		<Container>
			<Wrapper>
				<img src={ooooGif} />
			</Wrapper>
		</Container>
	</Page>
)
