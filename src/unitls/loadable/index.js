import { lazy, Suspense } from 'react';

const loadable = (importFnc, {fallback = null} = {fallback: null}) => {
	const LazyComponent = lazy(importFnc);
	return props => (
		<Suspense fallback={fallback}>
			<LazyComponent {...props} />
		</Suspense>
	)
}

export default loadable;
