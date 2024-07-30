import numpy as np

class CommunicationSystemsSimulator:
    def __init__(self, spacecraft, groundStation):
        self.spacecraft = spacecraft
        self.groundStation = groundStation

    def simulateCommunication(self):
        # Calculate signal strength
        signalStrength = self.calculateSignalStrength()

        # Calculate data rate
        dataRate = self.calculateDataRate()

        # Update spacecraft and ground station communication status
        self.spacecraft.updateCommunicationStatus(signalStrength, dataRate)
        self.groundStation.updateCommunicationStatus(signalStrength, dataRate)

    def calculateSignalStrength(self):
        # Calculate signal strength using free space path loss equation
        frequency = self.spacecraft.getFrequency()
        distance = self.spacecraft.getDistanceToGroundStation()
        transmitterPower = self.spacecraft.getTransmitterPower()
        antennaGain = self.spacecraft.getAntennaGain()
        wavelength = self.spacecraft.getWavelength()

        signalStrength = transmitterPower * antennaGain * wavelength**2 / ((4 * np.pi * distance)**2)

        return signalStrength

    def calculateDataRate(self):
        # Calculate data rate using Shannon-Hartley theorem
        bandwidth = self.spacecraft.getBandwidth()
        signalToNoiseRatio = self.spacecraft.getSignalToNoiseRatio()

        dataRate = bandwidth * np.log2(1 + signalToNoiseRatio)

        return dataRate

class Spacecraft:
    def __init__(self, frequency, distanceToGroundStation, transmitterPower, antennaGain, wavelength, bandwidth, signalToNoiseRatio):
        self.frequency = frequency
        self.distanceToGroundStation = distanceToGroundStation
        self.transmitterPower = transmitterPower
        self.antennaGain = antennaGain
        self.wavelength = wavelength
        self.bandwidth = bandwidth
        self.signalToNoiseRatio = signalToNoiseRatio
        self.communicationStatus = {"signalStrength": 0, "dataRate": 0}

    def getFrequency(self):
        return self.frequency

    def getDistanceToGroundStation(self):
        return self.distanceToGroundStation

    def getTransmitterPower(self):
        return self.transmitterPower

    def getAntennaGain(self):
        return self.antennaGain

    def getWavelength(self):
        return self.wavelength

    def getBandwidth(self):
        return self.bandwidth

    def getSignalToNoiseRatio(self):
        return self.signalToNoiseRatio

    def updateCommunicationStatus(self, signalStrength, dataRate):
        self.communicationStatus["signalStrength"] = signalStrength
        self.communicationStatus["dataRate"] = dataRate

class GroundStation:
    def __init__(self):
        self.communicationStatus = {"signalStrength": 0, "dataRate": 0}

    def updateCommunicationStatus(self, signalStrength, dataRate):
        self.communicationStatus["signalStrength"] = signalStrength
        self.communicationStatus["dataRate"] = dataRate
