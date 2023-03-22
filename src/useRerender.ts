import React, { useEffect, useRef } from 'react'

interface IUseRerender {
    logProps?: boolean
}

export function useRerender(config: IUseRerender = {}) {
    if (process.env.NODE_ENV === 'production') {
        return
    }

    const logProps = config.logProps ?? true

    // @ts-ignore
    const owner = React?.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner?.current
    const name = owner?.type?.name ? `<${owner.type.name} />` : ''

    const props = owner?.pendingProps as object
    const propsMessage = logProps ? ` with props: ${JSON.stringify(props)}` : ''
    const prevPropsRef = useRef<null | object>(null)


    useEffect(() => {
        console.log(`Component ${name} mounted${propsMessage}`)
        return () => {
            console.log(`Component ${name} unmounted`)
        }
    }, [])

    if (prevPropsRef.current) {
        console.log(`Component ${name} rerender${propsMessage}`)
    }

    prevPropsRef.current = props
}
