// Dpot language / Thread Manager \\
        //@@ Trix @@\\

import MainProcess from './MainProcess'

class ThreadManager extends MainProcess {
    constructor (maxThreads, minimumThreads) {
        maxThreads = maxThreads || 4
        minimumThreads = minimumThreads || 2


        workerThreads = [ ]
    }

    createThreads () {
        for (i=0, this.maxThreads, i++) {
            var workerThread = Worker('./ThreadManager')

            workerThreads.push(workerThread)
        }
    }
}

export default ThreadManager