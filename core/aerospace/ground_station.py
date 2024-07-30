import numpy as np
from scipy.signal import butter, lfilter

class GroundStation:
    def __init__(self, frequency, bandwidth):
        self.frequency = frequency
        self.bandwidth = bandwidth

    def receive_signal(self, signal):
        # Simulate the reception of a signal
        nyq = 0.5 * self.frequency
        normal_cutoff = self.bandwidth / nyq
        b, a = butter(5, normal_cutoff, btype='low')
        filtered_signal = lfilter(b, a, signal)
        return filtered_signal

    def demodulate_signal(self, signal):
        # Demodulate the received signal
        # (Assuming a simple amplitude modulation scheme)
        demodulated_signal = np.abs(signal)
        return demodulated_signal

    def decode_signal(self, signal):
        # Decode the demodulated signal
        # (Assuming a simple binary encoding scheme)
        decoded_signal = np.where(signal > 0.5, 1, 0)
        return decoded_signal

# Example usage:
ground_station = GroundStation(frequency=1000, bandwidth=100)
signal = np.random.rand(1000)
received_signal = ground_station.receive_signal(signal)
demodulated_signal = ground_station.demodulate_signal(received_signal)
decoded_signal = ground_station.decode_signal(demodulated_signal)
